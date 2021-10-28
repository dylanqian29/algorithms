/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
  const color = image[sr][sc];
  
  const fillColor = (image, sr, sc, oldColor, newColor) => {
      if (image[sr][sc] === oldColor){
          image[sr][sc] = newColor;
          if(sr>=1) fillColor(image, sr-1, sc, oldColor, newColor)
          if(sc>=1) fillColor(image, sr, sc-1, oldColor, newColor)
          if(sr< image.length-1) fillColor(image, sr+1, sc, oldColor, newColor)
          if(sc< image[0].length -1) fillColor(image, sr, sc+1, oldColor, newColor)
      }
  }
  
  if (color !== newColor) {
      fillColor(image, sr, sc, color, newColor)
  }
  
  return image
};