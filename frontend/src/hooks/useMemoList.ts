import { useCallback, useState } from "react";

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
  // メモ一覧state
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加ロジック
  const addTodo = useCallback((text: string) => {
    // state変更を正常に検知させるため新たな配列を作成
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
  }, [memos]);

  // メモ削除ロジック
  const deleteTodo = useCallback((index: number) => {
    // state変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return { memos, addTodo, deleteTodo };
};