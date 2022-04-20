import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { MemoList } from "./MemoList";
import { useMemoList } from '../hooks/useMemoList';

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックスstate
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をstateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加ボタンクリック
  const onClickAdd = () => {
    // カスタムフックのメモ追加ロジック
    addTodo(text);
    // テキストボックスを空に
    setText(""); 
  };

  // 削除ボタンをクリック
  const onClickDelete = useCallback((index: number) => {
    // カスタムフックのメモ削除ロジック
    deleteTodo(index)
  }, []);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  );
}

const SButton = styled.button`
  margin-left: 16px;
`;


export default App;
