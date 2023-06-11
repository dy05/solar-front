export function guest({next, store}){
  let authToken = localStorage.getItem('authToken');
  // let isLoggedIn = false
  // let isLoggedIn = false
  if(authToken) {
    return next({
      name: 'dashboard'
    })
  }

  return next();
}

export function auth({next, store}){
  let isLoggedIn = false // Can be calculated through store
  // let isLoggedIn = store.getters['sessionData/isLoggedIn']
  if(! isLoggedIn) {
    return next({
      name: 'login'
    })
  }

  return next()
}

export function middlewarePipeline (context, middleware, index) {
  const nextMiddleware = middleware[index]

  if(!nextMiddleware){
    return context.next
  }

  return () => {
    const nextPipeline = middlewarePipeline(
      context, middleware, index + 1
    )

    nextMiddleware({ ...context, next: nextPipeline })
  }
}
