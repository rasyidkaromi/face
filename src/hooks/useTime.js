import { useState } from 'react';

const useTime = () => {

    const [timeago] = useState({
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 1000 * 60,
        day: 24 * 60 * 1000 * 60,
        week: 7 * 24 * 60 * 1000 * 60,
        // month: 30 * 24 * 60 * 1000 * 60,
        // year: 365 * 24 * 60 * 1000 * 60
    })

    const [makeAgo, setMakeAgo] = useState({
        textTimeAge: ' ago',
        round: Math.round,
        ago: (inputDate) => {
            let callDate = Date.now() - new Date(inputDate).getTime()
            let li;
            for (var i in timeago) {
                if (makeAgo.round(callDate) <= timeago[i]) {
                    return makeAgo.genAgo(li, makeAgo.round(callDate / (timeago[li])))
                }
                li = i;
            }
            for (var i in timeago) {
                if (makeAgo.round(callDate) >= timeago[i]) {
                    return makeAgo.genLastWeekAgo(inputDate)
                }
            }
        },
        genAgo: (listTimeAgoName, dayNumber) => {
            return dayNumber + ' ' + listTimeAgoName + (dayNumber > 1 ? 's' : '') + makeAgo.textTimeAge
        },
        genLastWeekAgo: (inputdates) => {
            const yourDate = {
                dd: new Date(inputdates).getDate(),
                mm: new Date(inputdates).getMonth(),
                yyyy: new Date(inputdates).getFullYear(),
            }
            if (yourDate.dd < 10) yourDate.dd = '0' + yourDate.dd
            if (yourDate.mm < 10) yourDate.mm = '0' + yourDate.mm
            return yourDate.dd + ' - ' + yourDate.mm + ' - ' + yourDate.yyyy;
        }
    })

    return {
        makeAgo, setMakeAgo
    }
}

export default useTime
