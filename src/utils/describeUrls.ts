export const describeUrls = (
    numUrlsVisited: number,
    numInitialValues: number,
    urlsWithNoValuesTable: string[],
    urlsWithNoInitialValue: string[],
    urlsWithMultipleInitialValues: string[]    
    ) => {
    console.log(`\nSummary of URLs visited:`);
    console.log(`Total URLs visited: ${numUrlsVisited}`);
    console.log(`Total URLs with resolved initial values: ${numInitialValues}`);
    console.log(`Total URLs with no values table: ${urlsWithNoValuesTable.length}`);
    console.log(`Total URLs with no initial value: ${urlsWithNoInitialValue.length}`);
    console.log(`Total URLs with multiple initial values: ${urlsWithMultipleInitialValues.length}`);
    
    if (urlsWithNoValuesTable.length > 0) {
        console.log(`URLs with no values table: ${urlsWithNoValuesTable.join(', ')}`);
    }
    
    if (urlsWithNoInitialValue.length > 0) {
        console.log(`URLs with no initial value: ${urlsWithNoInitialValue.join(', ')}`);
    }
    
    if (urlsWithMultipleInitialValues.length > 0) {
        console.log(`URLs with multiple initial values: ${urlsWithMultipleInitialValues.join(', ')}`);
    }
}