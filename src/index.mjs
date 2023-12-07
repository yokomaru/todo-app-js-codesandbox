import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、テキストボックスを初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストを追加
  createIncompleteTodo(inputText);
}

// 渡された引数をもとに未完了のToDOを作成する
const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {

    // li要素のボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンを生成してdivタグ配下に設定
    const  backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });

    // １番最初の子要素を追加
    moveTarget.firstElementChild.appendChild(backButton);

    // 取得した要素の変数を持っている
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  // 削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {

    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    // おやタグを探して行って一番近いタグを探す
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};



document.getElementById("add-button").addEventListener("click", onClickAdd);
