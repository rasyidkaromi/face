import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../context/loadingcontext';
import SteteContext from '../context/statecontext'
import { EndCatContext } from '../context/endcatcontext'


const API = 'http://localhost:3000/api/products/'



const useService = () => {
  const {
    page, setPage,
    limit, sort, 
    store, setStore,
    item, setItem,
  } = useContext(SteteContext);

  const { loadingCount, showLoading, hideLoading } = useContext(LoadingContext)
  const { endCat, showEndCat, hideEndCat } = useContext(EndCatContext)

  let [storages, setStorages] = useState([])
  let [isLoading, setIsLoading] = useState(true);
  let [loadMore, setLoadMore] = useState(true);
  const [ads, setAds] = useState({
    pos: 19,
    interval: 20,
    url: 'http://localhost:3000/ads/?r=',
    addId: []
  })

  const newId = (arr) => {
    arr.forEach(obj => {
      obj.newId = obj.id.split('-')[0],
        obj.ads = false,
        obj.preEmptively = false
    })
  }
  const genMathId = () => {
    return Math.floor(Math.random() * 1000)
  }

  const findUniqId = (arr, isiArr) => {
    var results = [];
    var idx = arr.indexOf(isiArr);
    while (idx != -1) {
      results.push(idx);
      idx = arr.indexOf(isiArr, idx + 1);
    }
    return results;
  }

  useEffect(() => {
    let loop = true
    let itemm = [...item]
    if (store) {
      if (ads.pos < itemm.length) {
        while (loop) {
          let genmathid = genMathId()
          let resAds = findUniqId(ads.addId, genmathid)
          if (resAds.length === 0) {
            itemm.splice(ads.pos, 0, {
              url: ads.url + genmathid,
              ads: true,
            })
            setAds({
              ...ads,
              addId: [...ads.addId, genmathid],
              pos: ads.pos += ads.interval
            })
            setItem(itemm)
            loop = false
          }
        }
      }
    }
  }, [store])

  const preEmpti = () => {
    if (store) {
      let itemEmpty = [...item]
      for (let i = 0; i < limit; i++) {
        let emptifyObj = {
          preEmptively: true,
        }
        itemEmpty.push(emptifyObj)
      }
      setItem(itemEmpty)
    }
  }

  const postEmpti = (res) => {
    if (!store) {
      setStore(true)
      let postitemEmpty = [...item]
      let i = postitemEmpty.length - limit
      let el = postitemEmpty.length
        postitemEmpty.splice(i, el, ...res)
      setItem(postitemEmpty)
    }
  }
  useEffect(() => {
    postEmpti(storages)
  }, [storages])

  useEffect(() => {
    setStore(false)
    if (loadingCount == 0 && loadMore && endCat == 0) {
      preEmpti()
      hideEndCat()
      showLoading()
      fetchData()
        .then(res => {
          if (typeof res !== 'undefined') {
            newId(res)
            setStorages(res)
            setPage(page => page + 1)
            if (res.length == 0) {
              showEndCat()
            }
          }
        })
        .catch(console.error)
        .finally(() => {
          hideLoading()
        })
    }
    setLoadMore(false);
  }, [loadMore]);

  const fetchData = async () => {
    if (loadMore && loadingCount == 0) {
      let rest = API + '?_page=' + page + '&_limit=' + limit + '&_sort=' + sort
      let res = await fetch(rest)
      let data = await res.json()
      return data
    }
  }

  return {
    loadMore, setLoadMore,
    isLoading, fetchData,
  };
};

export default useService;


