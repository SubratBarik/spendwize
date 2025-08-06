function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='col-md-12'>
        <div className='copyright'>
          <p className='text-center'>&copy;{currentYear} SpendWize. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer;
