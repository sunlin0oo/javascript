export default class MyCalendar{
    books = [];
    book(start, end) {
        for(let arr of this.books){
            let l = arr[0],r = arr[1];
            if(start < r && end > l){
                return false
            }
        }
        this.books.push([start, end])
        return true;
        };
}