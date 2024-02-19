// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


interface Shirt {
    size: string;
    message: string;
  }
  
  function make_shirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return { size, message };
  }
  
  const largeShirt: Shirt = make_shirt();
  console.log("Large Shirt:", largeShirt);
  
  const mediumShirt: Shirt = make_shirt("medium");
  console.log("Medium Shirt:", mediumShirt);
  
  const smallShirt: Shirt = make_shirt("small", "Hello, World!");
  console.log("Small Shirt:", smallShirt);
  