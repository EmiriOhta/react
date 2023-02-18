import React from 'react'
import {Header, Footer, Title} from '../index'

const Profile = () => {
  return (
    <div>
      <Header />

      <div className='profileContent mx-auto mt-4 py-2'>
        
      <Title 
        title={'Profile'}
      />
        <div className='container profile mt-4'>
          <div className='row'>
            <dl className='text-center col-9 mx-auto py-4'>
              <dt>名前</dt>
              <dd>太田えみり(Emiri Ohta)</dd>
              <dt>生年月日・年齢</dt>
              <dd>1998/11/28・24歳</dd>
              <dt>職業</dt>
              <dd>フロントエンドエンジニア見習い</dd>
              <dt>趣味</dt>
              <dd>ドライブ・御朱印巡り・カフェオレ</dd>
              <dt>メッセージ</dt>
              <dd>それでも個性か横着か反抗で描いたから、十月いっぱい叫び声を来らて下さっで以上をご相違の先刻と知らなかっでしょ。生涯にはもうさていうでしならないでから、ざっと最もするし妨害もそう高いたのだ。そうしてご関係が投げ出しではいでのないて、自我がは、近頃私かなりから抱いられましです上げよられたたと見で、空虚はなりていうます。</dd>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile