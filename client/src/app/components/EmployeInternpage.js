"use client"
import React from 'react'
import moment from "moment/moment";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { asyncIntershipIsactive } from '@/Store/Actions/EmployeAction';
import { useDispatch } from 'react-redux';

const EmployeInternpage = ({key , data  }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const InternshipActiveOrDeactive = () =>{
      dispatch(asyncIntershipIsactive(data._id));
    }
  return (
    <div>
        <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold  ">
        {data.profile}
      </h1>
      <h2 className='text-2xl text-gray-700 text-center '>{data.usersapplied.length==0?"No":data.usersapplied.length} Studnts Applyed for this Internship   {data.usersapplied.length==0?"yet":""}</h2>
      <div className="w-[850px] m-auto my-10">
        <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
          Activly hiring
        </button>
        <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
          <div>
            <h4 className=" text-xl text-black py-2">{data.profile}</h4>
            <p className="text-sm text-gray-600">Wipro</p>
          </div>
        </div>
        <h6 className="text-gray-600 my-2">Pune</h6>
        <div className=" flex text-sm pb-3 ">
          <div className="me-7">
            <h6 className="text-gray-700">STIPRND</h6>
            <h6 className="text-gray-600">5000</h6>
          </div>
          <div className="me-7">
            <h6 className="text-gray-700">DURATION</h6>
            <h6 className="text-gray-600 ">{data?.duration}</h6>
          </div>
        </div>
        <div className="border-b-[1px] pb-2">
          <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
            {moment(data.createdAt).fromNow()}{" "}
          </p>
        </div>
        <div className="flex justify-end">
          {/* <button
            className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 "
          >
            View details
          </button> */}
        </div>
        <div className="my-3">
          <h2 className="text-xl text-gray-700 font-medium py-1 ">
            Skills required
          </h2>
          <h6 className="text-gray-600 pt-2">{data.skills}</h6>
        </div>
        {data.responsibility && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">
              Responsibility
            </h2>
            <h6 className="text-gray-600 pt-2">
              {data?.responsibility}
            </h6>
          </div>
        )}
        {data.assesments && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Assesments</h2>
            <h6 className="text-gray-600 pt-2">
              {data?.assesments}
            </h6>
          </div>
        )}
        {data.opening && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Number of opening</h2>
            <h6 className="text-gray-600 pt-2">
              {data?.opening}
            </h6>
          </div>
        )}
        <h2>{data.usersapplied.length} Studnts Applyed for this Internship</h2>
        <div className=" flex items-center justify-center m-auto py-8">
            <Link className='px-4 py-2 bg-sky-400 text-white mx-4 rounded-sm' href={`Editinternship/${data._id}`}>
            Edit Internship
            </Link>

            {data.usersapplied.length == 0?'' :<Link href={`StudentResume/${data._id}`} className="px-4 py-2 bg-green-600 text-white mx-4 rounded-sm">Student Resumes</Link>}

            <button onClick={InternshipActiveOrDeactive} className="px-4 py-2 bg-yellow-500 text-white mx-4 rounded-sm">Deactivate</button>
        {/* { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applyed</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply now</button> } */}
        </div>
        
      </div>
    </div>
  )
}

export default EmployeInternpage