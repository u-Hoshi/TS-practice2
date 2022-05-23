// 6.7 名前的型をシュミレートする 型のブランド化
type CompanyID = string & { readonly brand: unique symbol }
type OrderID = string & { readonly brand: unique symbol }
type UserID = string & { readonly brand: unique symbol }
type ID = CompanyID | OrderID | UserID

function CompanyID(id: string) {
  return id as CompanyID
}
function OrderID(id: string) {
  return id as OrderID
}
function UserID(id: string) {
  return id as UserID
}

function queryForUser(id: UserID) {
  console.log(id)
}

const companyId = CompanyID('2324jl')
const orderId = OrderID('9988ds')
const userId2 = UserID('fdfd89')

queryForUser(userId2)
queryForUser(orderId)
