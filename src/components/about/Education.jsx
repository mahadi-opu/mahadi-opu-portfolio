import React from 'react';
import './education.css';

const Education = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th> Degree </th>
                    <th> Department </th>
                    <th> Institute </th>
                    <th> Year </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> BSC </td>
                    <td> Computer Science & Software Engineering (CSE) </td>
                    <td> Northern University Bangladesh </td>
                    <td> Present </td>
                </tr>
                
                <tr>
                    <td> Diploma Engineering </td>
                    <td> Power Engineering </td>
                    <td> Khulna Polytechnic Institute </td>
                    <td> 2013 - 2017 </td>
                </tr>
                <tr>
                    <td> HSC </td>
                    <td> Business Studies </td>
                    <td> Khanjahan Ali Collage Khulna </td>
                    <td> 2013-2015 </td>
                </tr>
                <tr>
                    <td> SSC Dhakil </td>
                    <td> Science </td>
                    <td> Noapara Hijbullah Dakhil Madrasha </td>
                    <td> 2005-2013  </td>
                </tr>
                <tr>
                    <td> Hafiz </td>
                    <td> Al Quran </td>
                    <td> Madinatul Ulum Masna Madrasah Jessore </td>
                    <td> 2002-2005 </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Education;