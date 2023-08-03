import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface IPostListItem {
  img: string;
  title: string;
  author: string;
  liked: boolean;
  number_of_likes: number;
}

function MasonryImageList(list: IPostListItem[]) {
  // 图片加载完成后获取原始宽高
  // 更好的解决方案是在服务端处理图片资源并在 list 数据中返回图片的宽高
  const [imageSizes, setImageSizes] = useState<{
    [key: string]: { width: number; height: number };
  }>({});
  useEffect(() => {
    list.forEach((item) => {
      const img = new window.Image();
      img.onload = () => {
        setImageSizes((sizes) => ({
          ...sizes,
          [item.img]: { width: img.naturalWidth, height: img.naturalHeight },
        }));
      };
      img.src = `${item.img}?w=248&fit=crop&auto=format`;
    });
  }, [list]);

  return (
    <ImageList variant="masonry" cols={2} gap={8}>
      {list.map((item, index) => (
        <ImageListItem key={item.img}>
          {imageSizes[item.img] ? (
            <Image
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              width={imageSizes[item.img].width}
              height={imageSizes[item.img].height}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                maxHeight: 280,
                minHeight: 180,
              }}
              priority={index < 10} // 和 loading="lazy" 只能二选一；加了 priority 属性，那么 Next.js 会优先加载这张图片，而不使用懒加载技术。这意味着这张图片会在页面加载时立即开始加载，而不是等到进入用户视口时再加载；而对于其他图片，由于省略了 loading 属性，因此它们会使用懒加载技术来加载。也就是说，这些图片只有在进入用户的视口时才会开始加载
            />
          ) : null}
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {item.liked ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
                {item.number_of_likes}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const PostList: React.FC<{ list: IPostListItem[] }> = ({ list }) => {
  return MasonryImageList(list);
};

export default PostList;
