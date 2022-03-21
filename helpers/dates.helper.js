export const getDifferenceInDays = (startDate) => {
    return (Date.now() - startDate) / (1000 * 60 * 60 * 24); 
}
