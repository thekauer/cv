import { useEffect } from 'react'
import firebase,{ db } from '../firebase'
export const dateToDays = (date: Date) => {
    return Math.floor(date as any as number /8.64e7);
}
export const todayToDays = () => {
    const today = firebase.firestore.Timestamp.now().toDate();
    return dateToDays(today);
}
export const useTrack = (name : string) => {
    const days = todayToDays();
    const clicks = db.collection('clicks');
    const update = async () => {
        const event = await clicks.where('days','==',days).where('name','==',name).get();
        if(event.empty) {
            clicks.add({
                name:name,
                days:days,
                count:1
            });
        } else {
            let c = 0;
            let id = "";
            event.forEach((doc) =>{
                const {count} = doc.data();
                id = doc.id;
                c=count;
            })
            
            clicks.doc(id).update('count',c+1);
        }

    }
    update();
}