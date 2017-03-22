export default (asyncFunction: Function): Function =>
  (...params: any[]): Promise<any> =>
    new Promise((resolve, reject) =>
      asyncFunction(...params, (error: any, result: any): void => {
        if (error) reject(error)
        
        resolve(result)
      })
    )

