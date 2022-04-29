# React + TypeScript の Docker環境構築

1. カレントディレクトで以下を順に実行
```
docker-compose build      
```

```
docker-compose run --rm frontend sh -c 'create-react-app frontend --template typescript'
```

2. アプリケーションの起動停止
```
#起動
docker-compose up
#停止
docker-compose down
```