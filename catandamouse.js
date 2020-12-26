function catAndMouse(x, y, z) {
    const dstbtwmousendcatA = Math.abs(x - z);
    const dstbtwmousendcatB = Math.abs(y - z);
    // console.log(dstbtwmousendcatA);
    // console.log(dstbtwmousendcatB);
    if(dstbtwmousendcatA == dstbtwmousendcatB ){
        console.log( "Mouse C" );
        return "Mouse C"
    }
    else if (dstbtwmousendcatA < dstbtwmousendcatB) {
      console.log( "Cat A" );
      return 'Cat A'
    }
     else if (dstbtwmousendcatA > dstbtwmousendcatB) {
      console.log( "Cat B" );
      return 'Cat B'
    }
  }

  catAndMouse(1,2,3)
  catAndMouse(1,3,2)