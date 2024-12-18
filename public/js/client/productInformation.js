function showReplyForm(commentId) {
    const replySection = document.getElementById(`reply-section-${commentId}`);
    replySection.style.display = replySection.style.display === "none" ? "block" : "none";
}

function addReply(parentCommentId) {
    const replyText = document.getElementById(`reply-${parentCommentId}`).value.trim();
    if (replyText === "") {
        alert("Vui lòng nhập nội dung phản hồi.");
        return;
    }

    const replySection = document.getElementById(`reply-section-${parentCommentId}`);
    const newReplyId = `reply-${Date.now()}`; // Tạo ID duy nhất cho phản hồi
    const newReplyHTML = `
        <div class="comment" id="${newReplyId}">
            <img class="comment-avatar" src="https://via.placeholder.com/50" alt="Avatar">
            <div class="comment-content">
                <div class="comment-author">Khách hàng</div>
                <p class="comment-text">${replyText}</p>
                <div class="comment-time">Vừa xong</div>
                <div class="reply-button">
                    <button onclick="showReplyForm('${newReplyId}')">Phản hồi</button>
                </div>
                <div class="reply-section" id="reply-section-${newReplyId}" style="display: none;">
                    <textarea id="reply-${newReplyId}" placeholder="Viết phản hồi..."></textarea>
                    <button onclick="addReply('${newReplyId}')" id="btn-${newReplyId}">Gửi phản hồi</button>
                </div>
            </div>
        </div>
    `;
    // Thêm phản hồi vào cuối danh sách phản hồi
    replySection.insertAdjacentHTML("beforeend", newReplyHTML);

    // Xóa nội dung trong ô nhập
    const replyInput = document.getElementById(`reply-${parentCommentId}`);
    replyInput.value = "";

    // Ẩn nút "Gửi phản hồi" chỉ sau khi đã gửi phản hồi
    const sendButtonOriginal = document.getElementById(`btn-${parentCommentId}`);
    if (sendButtonOriginal) {
        sendButtonOriginal.style.display = "none";
    }

    // Hiển thị lại vùng nhập nếu cần
    replyInput.style.display = "none";
}

function addComment() {
    const newCommentText = document.getElementById("new-comment").value.trim();
    if (newCommentText === "") {
        alert("Vui lòng nhập nội dung bình luận.");
        return;
    }

    const commentsSection = document.querySelector(".comments-section");
    const addCommentForm = document.querySelector(".add-comment");
    const newCommentId = `comment-${Date.now()}`; // Tạo ID duy nhất cho bình luận
    const newCommentHTML = `
        <div class="comment" id="${newCommentId}">
            <img class="comment-avatar" src="https://via.placeholder.com/50" alt="Avatar">
            <div class="comment-content">
                <div class="comment-author">Khách hàng</div>
                <p class="comment-text">${newCommentText}</p>
                <div class="comment-time">Vừa xong</div>
                <div class="reply-button">
                    <button onclick="showReplyForm('${newCommentId}')">Phản hồi</button>
                </div>
                <div class="reply-section" id="reply-section-${newCommentId}" style="display: none;">
                    <textarea id="reply-${newCommentId}" placeholder="Viết phản hồi..."></textarea>
                    <button onclick="addReply('${newCommentId}')" id="btn-${newCommentId}">Gửi phản hồi</button>
                </div>
            </div>
        </div>
    `;
    // Tạo một DOM element từ chuỗi HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = newCommentHTML;

    // Thêm phần tử đầu tiên của tempDiv vào DOM ngay trước form
    commentsSection.insertBefore(tempDiv.firstElementChild, addCommentForm);

    // Xóa nội dung trong ô nhập
    document.getElementById("new-comment").value = "";
}
