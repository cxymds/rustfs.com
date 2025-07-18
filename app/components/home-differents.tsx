'use client'

import { useI18n } from "@/lib/i18n"
import { CheckIcon, XIcon } from "lucide-react"

export default function HomeDifferents() {
  const { tw } = useI18n()

  return (
    <section className="relative pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32 bg-muted"
    // style={{
    //   backgroundImage: "url('/svgs/backgrounds/gradient-transparent.svg')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat"
    // }}
    >
      {/* Features */}
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            {tw('与其他存储产品的对比', 'Comparison with other storage products')}
          </h2>
          <p className="mt-4">
            {tw('选择 RustFS，您将获得更多的优势', 'Choose RustFS for more advantages')}
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-6 lg:flex-row xl:mx-auto xl:w-10/12">
          <div className="relative rounded-xl bg-white md:w-1/2 lg:text-right dark:bg-neutral-800">
            <h3 className="p-4 text-xl font-semibold lg:p-8 lg:text-3xl">{tw('其他对象存储', 'Other object storage')}</h3>
            <div className="text-muted-foreground">
              <div className="flex items-center gap-2 bg-neutral-100 p-4 md:flex-row-reverse lg:px-8 dark:bg-neutral-900">
                <XIcon className="text-neutral-500" />
                <span>{tw('使用 Go 或者 C 语言开发，内存垃圾回收异常 / 内存泄漏等', 'Memory management issues with Go/C')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 md:flex-row-reverse lg:px-8 ">
                <XIcon className="text-neutral-500" />
                <span>{tw('向其他第三国上报日志，违反国家安全法', 'Foreign logging violates security laws')}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-100 p-4 md:flex-row-reverse lg:px-8 dark:bg-neutral-900">
                <XIcon className="text-neutral-500" />
                <span>{tw('AGPL V3 等协议、污染开源和协议陷阱，侵犯知识产权', 'AGPL V3 licensing issues')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 md:flex-row-reverse lg:px-8 ">
                <XIcon className="text-neutral-500" />
                <span>{tw('S3 支持和功能完善，不支持中国云厂商', 'Incomplete S3 support for Chinese clouds')}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-100 p-4 md:flex-row-reverse lg:px-8 dark:bg-neutral-900">
                <XIcon className="text-neutral-500" />
                <span>{tw('不完全支持国产信创设备', 'Limited domestic device support')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 md:flex-row-reverse lg:px-8 ">
                <XIcon className="text-neutral-500" />
                <span>{tw('每年涨价，价格高达数百万人民币', 'Annual price hikes up to millions')}</span>
              </div>
            </div>

            <div className="absolute bottom-0 start-0 hidden -translate-x-16 translate-y-16 md:block">
              <svg
                className="h-auto w-56 text-cyan-500"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative rounded-xl bg-white text-left md:w-1/2 dark:bg-neutral-800">
            <h3 className="p-4 text-xl font-semibold lg:p-8 lg:text-3xl">RustFS</h3>
            <div className="text-muted-foreground">
              <div className="flex items-center gap-2 bg-neutral-100 p-4 lg:px-8 dark:bg-neutral-900">
                <CheckIcon className="text-green-500" />
                <span>{tw('基于 Rust 语言开发，内存更安全', 'Memory-safe Rust development')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 lg:px-8 ">
                <CheckIcon className="text-green-500" />
                <span>{tw('不向其他第三国上报日志', 'No foreign logging')}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-100 p-4 lg:px-8 dark:bg-neutral-900">
                <CheckIcon className="text-green-500" />
                <span>{tw('Apache协议，商用支持更友好', 'Business-friendly Apache license')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 lg:px-8 ">
                <CheckIcon className="text-green-500" />
                <span>{tw('S3 支持和功能完善，支持国内云厂商', 'Full S3 support for Chinese clouds')}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-100 p-4 lg:px-8 dark:bg-neutral-900">
                <CheckIcon className="text-green-500" />
                <span>{tw('支持国产信创设备和保密系统', 'Supports domestic secure systems')}</span>
              </div>
              <div className="flex items-center gap-2 p-4 lg:px-8 ">
                <CheckIcon className="text-green-500" />
                <span>{tw('商用和技术支持和价格稳定', 'Stable pricing and support')}</span>
              </div>
            </div>

            <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-green-500 px-3 py-1.5 text-xs font-medium text-white">
              {tw('最佳选择', 'Best choice')}
            </span>

            <div className="absolute end-0 top-0 hidden translate-x-16 translate-y-16 md:block">
              <svg
                className="h-auto w-16 text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-7 text-center">
          <p className="text-xs text-neutral-400">{tw('* 以上对比仅供参考，具体以实际情况为准', '* Comparison for reference only')}</p>
        </div>
        {/* End Features */}
      </div>
    </section >
  )
}
