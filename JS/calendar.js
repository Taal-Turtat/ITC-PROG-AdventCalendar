const calendar = document.getElementById("calendar");

const calendarMake = () => {
    /* カレンダーを表示する関数 */
    let strList = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"];
    //頭の処理
    calendar.innerHTML += "<table><thead>";
    strList.forEach(date => {
        let str = "<th class='"+ date +"'>";
        str += date + "</th>";
        calendar.innerHTML += str;
    });
    calendar.innerHTML += "</thead>"
    //カレンダー部分の処理
    const dayStarts = 1;
    const dayEnds = 31;
    const dayShowingEnd = 25;
    const dateStarts = 6; // 0:Mon ... 6:Sun
    let i = 0;
    calendar.innerHTML += "<tbody>";
    while(i <= dayEnds+14){
        calendar.innerHTML += "<tr>";
        for(let j=0;j<7;j++){
            let str = "<td class='"+ strList[j]+"'";
            if(i > dayShowingEnd+dateStarts){str += "class='pseudo'"}
            str += ">"+ i > dateStarts && i <= (dayEnds+dateStarts) ? (i-dateStarts).toString() : " " +"</td>";
            calendar.innerHTML += str;
            i++;
        }
        calendar.innerHTML += "</tr>";
    }
    calendar.innerHTML += "</tbody></table>";
}