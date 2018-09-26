/**
 * Create By Guanghua on 2018/3/14.
 */

export const receiveData = data => ({ type: 'RECEIVE_LIST_DATA', data: data });

export function getListRecord(subreddit) {
  
    return function (dispatch) {
  
      return fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
        .then(
          response => response.json(),
           error => console.error('An error occurred', error)
        )
        .then(json => {
            console.log('json', json);
            dispatch(receiveData(json));
        }
        )
    }
  }
