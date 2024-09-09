import axios from 'axios';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const ReportList = () => {
    const [lists, setList] = useState([]);
    const [searchType, setSearchType] = useState('title');
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, SetTotalPages] = useState(1);
    const pageSize = 10;

    const token = sessionStorage.getItem('token');
    const loginId = sessionStorage.getItem('loginId');

    useEffect(() => {
        if (token) {
            fetchLists();
        }
    }, [currentPage,  token]);


    const fetchLists = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/auth/docx/list?page=${currentPage}&size=${pageSize}`, {
                headers: {
                    auth_token: token
                }
            });
            setList(response.data.list);
            SetTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error feching reports', error);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        console.log(searchType);
        console.log(searchValue);

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/docx/list`, {
                searchType,
                searchValue
            }, {
                headers: {
                    auth_token: token
                }
            });
            console.log(response.data.list);
            setList(response.data.list);
            SetTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error searching reports: ', error);
        }
    };

    const handleDelete = async (docxKey) => {
        try {
            await axios.delete(`http://localhost:8081/auth/docx/deldocx?docxkey=${docxKey}`, {
                headers: {
                    auth_token: token
                }
            });
            fetchLists(); // 삭제하고 목록 갱신
        } catch (error) {
            console.error('Error deleting report:', error);
        }
    };

    const navigate = useNavigate();

    const addnewreport = () => {
        navigate('/addreport');
    };

    const mydocxlist = () => {
        navigate(`/auth/docx/mylist?writer=${loginId}`);
    };

    return (
        <div className="main_body">
            <div className="record_table w_bg pt-5">
                <h2 className="noticetitle">문서보관함</h2>
                <div className="notice_tab">
                    <button
                        className='tablinks btn btn-outline-primary'
                        onClick={mydocxlist}
                    >
                        내 문서 보관함
                    </button>


                    <div className="searchCss">
                        <form onSubmit={handleSearch}>
                            <label htmlFor="searchType"></label>
                            <select id="searchType" name="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                                <option value="title">제목</option>
                                <option value="writer">작성자</option>
                            </select>
                            <input
                                type="text"
                                id="searchValue"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="검색 내용 입력.."
                            />
                            <button type="submit" className="btn btn-secondary">검색</button>
                        </form>
                    </div>
                </div>
                <div className="record_table w_bg">
                    <div className="record_table_wrapper">
                        <div className="left_table">
                            <table className="record_rtable">
                                <thead>
                                    <tr>
                                        <th>글제목</th>
                                        <th>작성자</th>
                                        <th>서류종류</th>
                                        <th>작성일</th>
                                        <th>결재현황</th>
                                        <th>문서삭제</th>
                                    </tr>
                                </thead>
                                <tbody className='record_list'>
                                    {lists.map((list) => (
                                        <tr key={list.formnum}>
                                            <input type="hidden" value={list.formnum} />
                                            <td className="title-cell">
                                                {list.formtype === '보고서' && (
                                                    <Link to={'/auth/docx/getdocx/' + list.formnum + '/' + list.docxkey + '/' + list.formtype}>
                                                        {list.title}
                                                    </Link>
                                                )}
                                                {list.formtype === '휴가 신청서' && (
                                                    <Link to={`/auth/docx/getvacation?formnum=${list.formnum}&docxkey=${list.docxkey}&formtype=${list.formtype}`}>
                                                        {list.title}
                                                    </Link>
                                                )}
                                            </td>
                                            <td>{list.writer.id}</td>
                                            <td>{list.formtype}</td>
                                            <td>{list.startdt}</td>
                                            <td>
                                                {list.status === 1 && <span>미승인</span>}
                                                {list.status === 2 && <span>승인</span>}
                                                {list.status === 3 && <span>보류</span>}
                                                {list.status === null && <span>&nbsp;</span>}
                                            </td>
                                            <td>
                                                {list.writer.id === loginId && list.status === 1 && (
                                                    <button onClick={() => handleDelete(list.docxkey)} className="btn btn-danger" style={{ border: '1px solid red', borderRadius: '7px', padding: '4px' }}>
                                                        <i className="fa-solid fa-eraser"></i>
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="notice_add_search">
                                <div className="notice_add">
                                    <button
                                        className='tablinks btn btn-outline-primary'
                                        onClick={addnewreport}
                                    >서류작성
                                    </button>
                                </div>
                            </div>
                            {/* 페이지네이션 */}
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => setCurrentPage(page)}>
                                                {page}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportList;


