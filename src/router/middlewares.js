import store from '../store';

export function guest({next}){
  const token = store.getters['users/token'];
  if(token) {
    return next({
      name: 'dashboard'
    })
  }

  return next();
}

export function auth({next}){
  const token = store.getters['users/token'];
  if(! token) {
    return next({
      name: 'login'
    })
  }

  return next()
}

export function middlewarePipeline (context, middleware, index) {
  const nextMiddleware = middleware[index]

  if(! nextMiddleware){
    return context.next
  }

  return () => {
    const nextPipeline = middlewarePipeline(
      context, middleware, index + 1
    )

    nextMiddleware({ ...context, next: nextPipeline })
  }
}
