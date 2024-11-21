const gridItems = document.querySelectorAll(".grid-item");
const verifyButton = document.getElementById("verify-btn");
const resultBox = document.getElementById("result-box");
const resultIcon = document.querySelector(".result-icon");
const resultText = document.querySelector(".result-text");

// grid-item 클릭 이벤트 핸들러 함수 정의
function toggleGridItemSelection(event) {
    const item = event.currentTarget;
    if (item.classList.contains("selected")) {
        item.classList.remove("selected");
        const checkmark = item.querySelector(".checkmark");
        if (checkmark) checkmark.remove();
    } else {
        item.classList.add("selected");
        const checkmark = document.createElement("div");
        checkmark.classList.add("checkmark");
        item.appendChild(checkmark);
    }
}

// grid-item 클릭 이벤트 활성화
function enableGridItemSelection() {
    gridItems.forEach((item) => {
        item.addEventListener("click", toggleGridItemSelection);
    });
}

// grid-item 클릭 이벤트 비활성화
function disableGridItemSelection() {
    gridItems.forEach((item) => {
        item.removeEventListener("click", toggleGridItemSelection);
    });
}

// 초기 상태에서는 grid-item 선택 활성화
enableGridItemSelection();

verifyButton.addEventListener("click", () => {
    const selectedIds = Array.from(document.querySelectorAll(".grid-item.selected")).map((item) =>
        Array.from(gridItems).indexOf(item) + 1
    );

    if (selectedIds.includes(1) && selectedIds.includes(3) && selectedIds.includes(6) && selectedIds.length === 3) {
        resultIcon.className = "result-icon checkmark";
        resultText.textContent = "I'm not a Nutria.";
    } else {
        resultIcon.className = "result-icon crossmark";
        resultText.textContent = "OH MY.. YOU ARE A NUTRIA, MAN.";
    }

    // 결과 박스 표시 및 grid-item 선택 비활성화
    resultBox.classList.remove("hidden");
    resultBox.classList.add("visible");
    disableGridItemSelection();
});
