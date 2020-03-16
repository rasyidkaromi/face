import React, { useState, useEffect, useContext } from 'react';
import SteteContext from '../context/statecontext'
import useService from '../hooks/useService'


const useUtility = () => {
    // const { setLoadMore } = useService();
    const {
        item, setItem,
        sort, setSort,
        sortApiType,
        sortType,
        orderDSC
    } = useContext(SteteContext);

    const [sortBy, setSortBy] = useState({
        Size: (a, b, DSC) => {
            const nameA = a.size;
            const nameB = b.size;

            return sortBy.order(nameA, nameB, DSC);
        },
        Price: (a, b, DSC) => {
            const priceA = a.price;
            const priceB = b.price;

            return sortBy.order(priceA, priceB, DSC);
        },
        Id: (a, b, DSC) => {

            const newIdA = a.newId;
            const newIdB = b.newId;

            return sortBy.order(newIdA, newIdB, DSC);
        },
        order: (a, b, descending = true) => {
            if (descending) {
                return (
                    a < b ? -1 :
                        a > b ? 1 :
                            0
                );
            } else {
                return (
                    a < b ? 1 :
                        a > b ? -1 :
                            0
                );
            }
        }

    })
    const [conv, setConv] = useState({
        dollarConvert: (num) => {
            let dollars = num / 100
            return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
        }
    })

    const cases = (type, aa, bb, cc) => {
        switch (type) {
            case 'Size':
                return sortBy.Size(aa, bb, cc)
            case 'Price':
                return sortBy.Price(aa, bb, cc)
            case 'Id':
                return sortBy.Id(aa, bb, cc)

        }
    }
    useEffect(() => {
        const items = [...item];
        items.sort((a, b) => cases(sortType, a, b, orderDSC));
        setItem(items);
    }, [sortType, orderDSC]);


    return { sortBy, setSortBy, conv }
}
export default useUtility;