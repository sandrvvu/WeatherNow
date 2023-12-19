export function convertUnixTimestampToTime(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  
    // Format the time
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
  
    return `${hours}:${minutes}:${seconds}`;
  }