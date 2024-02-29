export function getTimeDifference(dateTimeString) {
    const currentTime = new Date();
    const targetTime = new Date(dateTimeString);
    const timeDifference = currentTime - targetTime; 
    const secondsDifference = Math.floor(timeDifference / 1000);
    const hours = Math.floor(secondsDifference / 3600);
    const minutes = Math.floor((secondsDifference % 3600) / 60);
    const seconds = secondsDifference % 60;


    const days = Math.floor(hours / 24);


    let timeDifferenceString = '';
    if (days > 0) {
        if (days === 1) {
            timeDifferenceString = 'Yesterday';
        } else {
            timeDifferenceString = `${days} days ago`;
        }
    } else {
        if (hours > 0) {
            timeDifferenceString += `${hours} hour${hours > 1 ? 's' : ''} `;
        }
        if (minutes > 0) {
            timeDifferenceString += `${minutes} minute${minutes > 1 ? 's' : ''} `;
        }
        if (seconds > 0) {
            timeDifferenceString += `${seconds} second${seconds > 1 ? 's' : ''}`;
        }
    }

    return timeDifferenceString.trim();
}