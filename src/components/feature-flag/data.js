const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: false,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true,
    showTabs: false,
};

function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error occured ! Please try again');
    })
}

export default featureFlagsDataServiceCall;