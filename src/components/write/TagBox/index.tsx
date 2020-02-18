import React, { useState, useCallback, useEffect } from 'react';
import { Tag, TagBoxBlock, TagForm, TagListBlock } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'reducers/write';

const TagItem = React.memo(({ tag, onRemove }: any) => (
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));
const TagList = React.memo(({ tags, onRemove }: any) => (
    <TagListBlock>
        {tags.map((tag: any) => (
            <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
));

const TagBox: React.FC = () => {
    const { tags } = useSelector(({ write }: any) => ({ tags: write.tags }));
    const dispatch = useDispatch();
    const [input, setInput] = useState<any>('');
    const [localTags, setLocalTags] = useState<string[]>(tags);

    const insertTag = useCallback(
        (tag: any) => {
            if (!tag) return;
            if (localTags.includes(tag)) return;
            const data = [...localTags, tag];
            setLocalTags(data);
            dispatch(changeField({ key: 'tags', value: data }));
        },
        [localTags, dispatch],
    );

    const onRemove = useCallback(
        tag => {
            const data = localTags.filter((t: any) => t !== tag);
            setLocalTags(data);
            dispatch(changeField({ key: 'tags', value: data }));
        },
        [localTags, dispatch],
    );

    const OnChange = useCallback(e => {
        setInput(e.target.value);
    }, []);

    const OnSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    );

    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={OnSubmit}>
                <input
                    placeholder="태그를 입력하세요"
                    value={input}
                    onChange={OnChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};

export default TagBox;
