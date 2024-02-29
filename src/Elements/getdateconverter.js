export const getdateconvert=(date=undefined)=>{

    let defultedate;

    if (date === undefined || date === '' || date === null) {
        defultedate = new Date().toISOString();
    } else {
        defultedate = date
    }
    console.log(defultedate)
   const originalDate = new Date(defultedate)
    const options = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };

      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(originalDate);
      return formattedDate
}

export const getyear = (date=undefined)=>{
    const givenDate = new Date(getdateconvert(date));
    const currentDate = new Date();

    let differenceInYears = currentDate.getFullYear() - givenDate.getFullYear();

    if (currentDate.getMonth() < givenDate.getMonth() || 
        (currentDate.getMonth() === givenDate.getMonth() && currentDate.getDate() < givenDate.getDate())) {
        differenceInYears--;
    }
    
    return differenceInYears;
}

export const getMonthDifference = (date=undefined) => {
    const givenDate = new Date(getdateconvert(date));
    const currentDate = new Date();
    let differenceInMonths = (currentDate.getFullYear() - givenDate.getFullYear()) * 12;
    differenceInMonths += currentDate.getMonth() - givenDate.getMonth();

    if (currentDate.getDate() < givenDate.getDate()) {
        differenceInMonths--;
    }
    
    return differenceInMonths;
}



export const getGreeting = ()=>{
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting = '';

    if (currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    return greeting;
}