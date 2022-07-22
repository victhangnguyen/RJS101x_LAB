//! import shared
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS,
}
//! pure Function
export function Reducer(state = initialState, action) {
  //! nextState

  return state
}
