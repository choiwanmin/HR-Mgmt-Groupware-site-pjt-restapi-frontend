
import { Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Leftnav from './components/common/Leftnav';
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Userinfo from "./components/user/Userinfo";
import Userlist from "./components/user/Userlist";
import DocxAdd from "./components/docx/AddReport";
import DocxList from "./components/docx/ReactList";
import MyRecord from "./components/record/MyRecord";
import MainChat from "./components/chat/MainChat";
import LoadChatRoomsView from "./components/chat/LoadChatRoomsView";
import LoadChatRoomsBySearch from "./components/chat/LoadChatRoomsBySearch";
import ConnectChatRoom from "./components/chat/ConnectChat";
import { useSelector } from "react-redux";
import NoticeList from "./components/notice/NoticeList";
import NoticeAdd from "./components/notice/NoticeAdd";
import Memberinfo from "./components/user/Memberinfo";
import Chartmain from "./components/charts/ChartMain";

export default function Router() {
    let loginId = useSelector(state=>state.userInfo);    
    const token = sessionStorage.getItem('token');
    const type = sessionStorage.getItem('type');
    
    return (
        <>
        {loginId === null? null:
        <>
           <Header/>
            <Leftnav/>
        </>
        }

        <Routes>
            {/* Conditional Routes */}
            {!token ? (
                <Route path="/" element={<Login />} />
            ) : type === 'admin' ? (
                // <Route path="/index_admin" element={<Ahome />} />
                <Route path="/" element={<Chartmain />}/>
            ) : (
                <Route path="/" element={<Chartmain />}/>
            )}

            {/* Login route */}
            <Route path="/login" element={<Login />} />

            {/* Admin route */}
            {/* <Route path="/index_admin" element={<Ahome />} /> */}

            {/* Staff route */}
            {/* <Route path="/index_staff" element={<Shome />} /> */}

            {/* Add other routes as needed */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/user/join" element={<Join />}></Route>
            <Route path="/user/info/:userid" element={<Userinfo />}></Route>
            {/* <Route path="/user/edit/:userid" element={<Useredit />}></Route> */}
            <Route path="/user/list" element={<Userlist />}></Route>
            <Route path="/member/info/:userid" element={<Memberinfo />}></Route>
            <Route path="/index" element={<Chartmain />}></Route>
            <Route path="/myrecord" element={<MyRecord/>}></Route>
            <Route path="/dept-record" element={<MyRecord/>}></Route>
            <Route path="/admin-record" element={<MyRecord/>}></Route>
            <Route path="/mainchat" element={<MainChat/>}/>
            <Route path="/loadchatroom" element={<LoadChatRoomsView />}/>
            <Route path="/searchchatroom" element={<LoadChatRoomsBySearch/>}/>
            <Route path="/connectchatroom" element={<ConnectChatRoom/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/docxlist" element={<DocxList/>}></Route>
            <Route path="/addreport" element={<DocxAdd/>}></Route>
            <Route path="/noticelist" element={<NoticeList/>}/>
            <Route path="/noticeadd" element={<NoticeAdd/>}/>
        </Routes>
        </>
    )
}