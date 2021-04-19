function formatDate(date : Date) {
    if(new Date().toDateString() === date.toDateString()) {
        return date.getHours().toString() + ":" + date.getMinutes().toString();
    } else {
        return date.toLocaleDateString();
    }

}

export default formatDate;