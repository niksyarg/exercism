export function cookingStatus(timeRemaining) {
  switch(timeRemaining) {
    case 0: 
      return 'Lasagna is done.';
    case undefined: 
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.';
  }
}

export function preparationTime(layers, time) {
  if (time >= 0) {
    return layers.length * time;
  } else{
    return layers.length * 2;
  }
}

export function quantities(layers){
  const obj ={
    noodles: 0,
    sauce: 0
  }
  for (let i = 0; i <= layers.length; i++) {
    if(layers[i] == "noodles"){
      obj.noodles +=50;
      } else if (layers[i] == "sauce"){
      obj.sauce += 0.2;
      }
  }
  return obj;
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length -1]);
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {};
  for (let key in recipe) {
    newRecipe[key] = recipe[key] * (portions/2);
  }
  return newRecipe;
}