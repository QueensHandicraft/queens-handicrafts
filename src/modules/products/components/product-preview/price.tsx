import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-ui-fg-muted text-left" data-testid="original-price">
          {price.original_price}
        </Text>
      )}
      <Text
      style={{
        color:"#191919",
        fontWeight:700,
        fontSize:'16px',
        lineHeight:'21px',
        fontFamily:'Market Sans,Arial,sans-serif'

      }}
        className={clx("text-ui-fg-muted text-left", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
