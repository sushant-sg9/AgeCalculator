function ageCalc(){
    let date1 = document.getElementById("date").value
    let month1 = document.getElementById("month").value
    let year1 = document.getElementById("year").value
    
    let date = new Date()
    let date2 = date.getDate()
    let month2 = 1+date.getMonth()
    let year2 = date.getFullYear()
    let month = [31,28,31,30,31,30,31,31,30,31,30,31]
    
    if(date1>date2){
        date2 = date2 + month[month2-1]
        month2 = month2-1
    }
    if(month1>month2){
        month2=month2+12
        year2=year2-1
    }
    let d = date2 - date1
    let m = month2-month1
    let y = year2 - year1
    document.getElementById("age").innerHTML=
    "Your Age is " + y + " Years " + m + " Months " + d + " Days"
}