// Add your code here:
app.param('spiceId', (req, res, next, id) => {
    const spiceId = Number(id);
    const spiceIndex = spiceRack.findIndex(spice => spice.id === spiceId);
    
    if (spiceIndex !== -1){
      req.spiceIndex = spiceIndex;
      next();
    } else {
      res.sendStatus(404);
    }
  })
  
  
  app.get('/spices/', (req, res, next) => {
    res.send(spiceRack);
  });
  
  app.post('/spices/', (req, res, next) => {
    const newSpice = req.body.spice;
    if (newSpice.name  && newSpice.grams) {
      newSpice.id = nextSpiceId++;
      spiceRack.push(newSpice);
      res.send(newSpice);
    } else {
      res.status(400).send();
    }
  });
  
  app.get('/spices/:spiceId', (req, res, next) => {
    res.send(spiceRack[req.spiceIndex]);
  });
  
  app.put('/spices/:spiceId', (req, res, next) => {
    spiceRack[req.spiceIndex] = req.body.spice;
    res.send(spiceRack[req.spiceIndex]);
  });
  
  app.delete('/spices/:spiceId', (req, res, next) => {
    spiceRack.splice(req.spiceIndex, 1);
    res.status(204).send();
  });

  // scratch paper solution for reference
  app.param('snackId', (req, res, next, id) => {
    const snackId = Number(id);
    const snackIndex = vendingMachine.findIndex(snack => snack.id === snackId);
    if (snackIndex === -1) {
      res.status(404).send('Snack not found!');
    } else {
      req.snackIndex = snackIndex;
      next();
    }
  });
  
  
  app.get('/snacks/', (req, res, next) => {
    res.send(vendingMachine);
  });
  
  app.post('/snacks/', (req, res, next) => {
    const newSnack = req.body;
    if (!newSnack.name || !newSnack.price) {
      res.status(400).send('Snack not found!');
    } else {
      newSnack.id = nextSnackId++;
      vendingMachine.push(newSnack);
      res.send(newSnack);
    }
  });
  
  app.get('/snacks/:snackId', (req, res, next) => {
    res.send(vendingMachine[req.snackIndex]);
  });
  
  app.put('/snacks/:snackId', (req, res, next) => {
    vendingMachine[req.snackIndex] = req.body;
    res.send(vendingMachine[req.snackIndex]);
  });
  
  app.delete('/snacks/:snackId', (req, res, next) => {
    vendingMachine.splice(req.snackIndex, 1);
    res.status(204).send();
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });