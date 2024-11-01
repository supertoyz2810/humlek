export type PostDetailProps = {
    content: string;
    contentImg: string[]
}

export type PostCommentProps = {
    content: string;
    createDate: string;
}

export type PostProps = {
    username: string;
    createDate: string;
    postDetail: PostDetailProps;
    postComments: PostCommentProps[];
    totalLike: number;
    totalDislike: number;
    totalComment: number;
    totalShare: number;
}