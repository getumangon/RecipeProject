import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commentReducer: [
    {
      "2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27": [
        {
          id: '1',
          comment: 'It\'s great dish to try!',
          rating: 4,
          author: 'Umang Patel',
          date: new Date()
        }
      ]
    },
    {
      "artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c": [
        {
          id: '1',
          comment: 'Awesome!',
          rating: 5,
          author: 'Umang Patel',
          date: new Date()
        },
        {
          id: '2',
          comment: 'Good dish!',
          rating: 3,
          author: 'John Doe',
          date: new Date()
        }
      ]
    }
  ],
}

export const homePageReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    postComment: (state, action) => {
      let newComment = action.payload;
      let tempComments = [...state.commentReducer];
      let objIndex = tempComments.findIndex(x => x.hasOwnProperty(newComment.detailsId));

      // object key alredy present
      if (objIndex > -1) {
        let tempArray = tempComments[objIndex][newComment.detailsId];
        tempArray.push(newComment);
        state.commentReducer = tempComments;
      } else {
        let tempArray = [...tempComments];
        tempArray.push({
          [newComment.detailsId]: [newComment]
        })
        state.commentReducer = tempArray;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { postComment } = homePageReducer.actions

export default homePageReducer.reducer
