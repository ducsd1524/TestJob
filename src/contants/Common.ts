export interface LocationDetail {
    name: string,
    address: string,
    region: {
        latitude: any,
        longitude: any,
    },
    image?: string,
    distance?: number
};

export const NoImage = 'https://mobifone3g.info/wp-content/uploads/2020/05/loi-khong-hien-thi-anh-tren-zalo-4.jpg'
export const ListLocation: LocationDetail[] = [
    {
        name: 'Nhà thuốc Minh Đan',
        address: '24 Nguyễn Phong Sắc, P, Cầu Giấy, Hà Nội 10000, Việt Nam',
        region: {
            latitude: 21.04076229128018,
            longitude: 105.79061499739947
        },

    },
    {
        name: 'Nhà thuốc Pharmacity',
        address: '15 Ngõ, 30 Phố Mai Anh Tuấn, Chợ Dừa, Đống Đa, Hà Nội, Việt Nam',
        region: {
            latitude: 21.02025324569075,
            longitude: 105.82220069122725
        }
    },
    {
        name: 'Nhà Thuốc Minh Tiến',
        address: 'Số 5 Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội, Việt Nam',
        region: {
            latitude: 20.99219634427843,
            longitude: 105.80006940025967
        }
    },
    {
        name: 'Hiệu Thuốc Số 12',
        address: '12 Ngọc Đại, Đai Mỗ, Từ Liêm, Hà Nội, Việt Nam',
        region: {
            latitude: 20.996363256099535,
            longitude: 105.75938565331846
        }
    },
    {
        name: 'Nhà thuốc IDC Hà Đông',
        address: 'ngõ 210 Đ. Thanh Bình, P. Mộ Lao, Hà Đông, Hà Nội, Việt Nam',
        region: {
            latitude: 20.985064244610548,
            longitude: 105.77921254265057
        },
        image: 'https://lh5.googleusercontent.com/p/AF1QipOUuU0yV0Nsgkb5mAtvZMFJqPPO_iJk2a2JvH-j=w408-h544-k-no'
    },
    {
        name: 'Nhà thuốc Minh Đan',
        address: '24 Nguyễn Phong Sắc, P, Cầu Giấy, Hà Nội 10000, Việt Nam',
        region: {
            latitude: 21.04076229128018,
            longitude: 105.79061499739947
        }
    },
    {
        name: 'Nhà thuốc Minh Đan',
        address: '24 Nguyễn Phong Sắc, P, Cầu Giấy, Hà Nội 10000, Việt Nam',
        region: {
            latitude: 21.04076229128018,
            longitude: 105.79061499739947
        }
    },
    {
        name: 'Nhà thuốc Minh Đan',
        address: '24 Nguyễn Phong Sắc, P, Cầu Giấy, Hà Nội 10000, Việt Nam',
        region: {
            latitude: 21.04076229128018,
            longitude: 105.79061499739947
        }
    },
    {
        name: 'Nhà thuốc Minh Đan',
        address: '24 Nguyễn Phong Sắc, P, Cầu Giấy, Hà Nội 10000, Việt Nam',
        region: {
            latitude: 21.04076229128018,
            longitude: 105.79061499739947
        }
    },

]