import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thinh hành',
            thumbnailUrl: 'https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9'
        },
        {
            id: 2,
            name: 'Rap nghe là ghiền',
            thumbnailUrl: 'https://f4.bcbits.com/img/0016073391_10.jpg'
        },
        {
            id: 3,
            name: 'Trào lưu nhạc hot',
            thumbnailUrl: 'https://www.designbold.com/academy/wp-content/uploads/2018/10/Something-to-remember-when-designing-an-ablum-cover.jpg'
        }
    ];
    return (
        <>
            <h3>Album list</h3>
            <AlbumList ablumList={albumList} />
        </>
    );
}

export default AlbumFeature;