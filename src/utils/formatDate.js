function formatDate (datetime){
    return (datetime.split('T')[1]).substring(0,5)
}

export default formatDate