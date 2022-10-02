const formatDate = (date) => {
    let day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString();

    return year + '-' + month + '-' + day;
};

module.exports = formatDate;
