import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import { EditorBlock, TitleInput, QuillWrapper } from './styles';
import { changeField } from 'reducers/write';
import { useDispatch } from 'react-redux';

const Editor: React.FC = () => {
    const dispatch = useDispatch();
    const quillElement = useRef<any>(null);
    const quillInstance = useRef<any>(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성해주세요...',
            modules: {
                toolbar: [
                    [{ header: 1 }, { header: 2 }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { align: [false, 'center', 'right'] },
                    ],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', () => {
            const value =
                quill.root.innerHTML === '<p><br></p>'
                    ? null
                    : quill.root.innerHTML;
            dispatch(changeField({ key: 'body', value }));
        });
    }, [dispatch]);

    const onTitleChange = (e: any) => {
        dispatch(changeField({ key: 'title', value: e.target.value }));
    };

    return (
        <EditorBlock>
            <TitleInput
                placeholder={'제목을 입력하세요.'}
                onChange={onTitleChange}
            />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;
