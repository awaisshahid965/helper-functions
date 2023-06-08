export const flattenArray = (mainList: Array<any>) => {
    if (!mainList) {
      return []
    }
    let returnResults: any = []
    mainList.forEach(childList => {
      if (!!childList && childList?.length && typeof childList !== 'string') {
        returnResults = [...returnResults, ...childList]
      }
    })
    return returnResults
  }