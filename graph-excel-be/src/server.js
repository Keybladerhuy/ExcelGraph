import app from './src/app';

const server = app.listen(app.get('port'), app.get('hostname'), () => {
    const hostname = app.get('hostname');
    const port = app.get('port');
    console.log(`Backend server is running at http://${hostname}:${port}. Press CTRL-C to stop`);
});

export default server;

