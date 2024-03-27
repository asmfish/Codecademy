/**
 * In this project, your objective is to create a text-based adventure game using reducers, 
 * state, and actions. The state will serve as a reflection of the game’s current status, 
 * encompassing elements such as the player’s inventory, distance covered, and time spent
 *  on the journey. Each occurrence within the game will be depicted as an action, allowing 
 * players to collect supplies, embark on travels, and occasionally, if they dare, encounter 
 * mishaps like overturning their wagon and losing their provisions.
 */

//Define the initial application state
const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  //Define a reducer to manage the state of the game
  const adventureGameReducer = (state = initialWagonState, action) =>{
    switch(action.type){
      /**
       * Player can gather supplies
       * increase supplies by 15 and days by 1
      */
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        }
      }
      /**
       * Player travel(action) any number of days (payload)
       * 20 supplies for each day
       * 10km covered each day
       * number of days added to the days
       * If there are not sufficient supplies to travel the given number of days, return the current state.
       */
      case 'travel': {
        if(state.supplies - (20 * action.payload) >= 0){
          return {
            ...state,
            supplies: state.supplies - (20 * action.payload),
            distance: state.distance + action.payload * 10,
            days: state.days + action.payload
          }
        }
        else{
          return state;
        }
      }
      /**
       * If player drives off-road or across rivers the wagon may tip.
       * Player need sometime to fix it, and needs some supplies.
       * So the state of the player after the fix will be:-
       * 30 less supplies
       * same distance
       * 1 more day
       */
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }
      /**
       * Player can give away 20 supplies to gain 5 cash
       * Lets make sure that he has at least 20 supplies to gain cahs
       */
      case 'sell': {
        if((state.supplies - action.payload) > 20 ){
            let parts = Math.floor(action.payload/20);
            return {
                ...state,
                supplies: state.supplies - (parts * 20),
                cash: state.cash + parts * 5
            }
        }
        else{
            return state;//if no enough supplies to gain cash return current state (no chnage)
        }
      }
      /**
       * Player can gain 25 supplies at cost of 15 cash
       * Lets make sure that player has at least 15 cash
       */
      case 'buy': {
        if(state.cash >= 15){
            let parts = Math.floor(state.cash/15);
            return {
                ...state,
                supplies: state.supplies + parts * 25,
                cash: state.cash - parts * 15
            }
        }
        else{
            return state; //If player does not have enough cash his state does not chnage
        }
      }
      /**
       * If theft happens, half of the player cash gets stolen
       */
      case 'theft': {
        return {
            ...state,
            cash: state.cash - (state.cash/2)
        }
      }
      // if no action given then return the state
      default: {
        return state;
      }
    }
  }
  
  //1. Start the game by calling the reducer, with undefined state and empty action.
  console.log('1. Initial player status')
  let wagon = adventureGameReducer(undefined, {});
  /**
   * {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
    }
   */
  console.log(wagon);
  
  //2. The first day will be travelling, so call the reducer with action=travel and payload=1
  console.log('2. Player travels 1 day')
  let action = {
    type: 'travel',
    payload: 1
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 80,
    distance: 10,
    days: 1,
    cash: 200
    }
   */
  console.log(wagon);
  
  //3. On the second day, player stop to gather supplies, call the reducer with action=gather and no payload
  console.log('3. Player gather resource')
  action = {
    type: 'gather'
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 95,
    distance: 10,
    days: 2,
    cash: 200
    }
   */
  console.log(wagon);
  
  //4. On the third day player try to ford in to a river, and the wagon tipped over and spilling some supplies, calle reducer
  console.log('4. Player tipped in river')
  action = {
    type: 'tippedWagon'
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 65,
    distance: 10,
    days: 1,
    cash: 200
    }
   */
  console.log(wagon);
  
  //5. On the following day player set out for long 3 days travel
  console.log('5. Plyer travels 3 days')
  action = {
    type: 'travel',
    payload: 3
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 5,
    distance: 40,
    days: 6,
    cash: 200
    }
   */
  console.log(wagon);
  
  //6. Player travels another day after the three days, but he do not have enough supplies to cover for this as he is only left with supplies = 5, but he needs 20 per day. So he will stay at his current state with no progress until he gets enough supplies.
  console.log('6. Player try to travel for 1 day but no engough supplies')
  action = {
    type: 'travel',
    payload: 1
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 5,
    distance: 40,
    days: 6,
    cash: 200
    }
   */
  console.log(wagon);
  
  //7. Additional features
  /**
   * Add a cash property, beginning with 200 for the initial state
   * Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
   * Add a 'buy' case: Players can gain 25 supplies at the cost of 15 cash
   * Add a 'theft' case: Outlaws steal half of the player’s cash
   */

  //8. The player has no enough supplies so lets buy supplies, he has 200 cash, 
  //so he can exchnage 25 supplies for 15 cash -- 200 cash would give him (200/15) * 25 = 325
  console.log('7. Player buys supplies with 200 cash - 15 cash for 25 supplies')
  action = {
    type: 'buy'
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 330,
    distance: 40,
    days: 6,
    cash: 5
    }
   */
  console.log(wagon);

  //9. Now player has enough supplies, lets him travel one day.
  console.log('8. Player travels 1 day - he has enough supplies')
  action = {
    type: 'travel',
    payload: 1//days to travel
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 310,
    distance: 50,
    days: 7,
    cash: 5
    }
   */
  console.log(wagon);

  //10. Now player have more supplies and he want to exchnage it to cash
  //with 20 supplies he can get 5 cash - if he sells 40 supplies he gets 10 cash and his supplies 310-40= 270
  console.log('8. Player sells 40 supplies to get cash - 20 supplies gives him 5 cash')
  action = {
    type: 'sell',
    payload: 40 //supplies to sell
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 270,
    distance: 50,
    days: 7,
    cash: 15
    }
   */
  console.log(wagon);

  //11. Imagine a theft occured and half cash of the player is gone
  console.log('9. Theft occured and half cash of the player got stolen')
  action = {
    type: 'theft'
  }
  wagon = adventureGameReducer(wagon, action);
  /**
   * {
    supplies: 310,
    distance: 50,
    days: 7,
    cash: 5
    }
   */
  console.log(wagon);