const userMessage = {
    nickName: $('#profile_block a:first')
        .text()
        .trim(),
    blogAge: $('#profile_block a:nth-child(3)')
        .text()
        .trim(),
    followers: $('#profile_block a:nth-child(5)')
        .text()
        .trim(),
    focus: $('#profile_block a:nth-child(7)')
        .text()
        .trim(),
}

export default userMessage
