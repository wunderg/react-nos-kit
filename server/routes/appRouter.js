export default (app, express, staticPath) => {
  const appRouter = new express.Router();

  app.use('/', appRouter);

  appRouter.get('/about', (req, res) => {
    console.log('hello');
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/login', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });

  appRouter.get('/signup', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });
}
