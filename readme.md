You will need to have `NodeJS` and somekind of webserver such as `http-server`. You can install `http-server` from `npm` via `npm i -g http-server`

```
cd mother-app/backend
npm i
npm run start
```

In a separate terminal window go to frontend directory

```
cd ../frontend
cd build
http-server
```

Open a chrome window and point it to `localhost:3000` the mother app should launch. Use the links on the left to naviage between subapps. 
